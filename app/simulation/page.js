"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Settings2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WaveSimulation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const animationRef = useRef();
  const timeRef = useRef(0);
  const emittersRef = useRef([]);
  const [circles, setCircles] = useState([]);

  // Controllable parameters
  const [params, setParams] = useState({
    frequency: 0.2,    // Hz
    waveSpeed: 3,      // m/s
    emitters: 6,       // count
  });

  // Derived parameters
  const FPS = 60;
  const X = 100;
  const Y = 100;
  const lambda0 = params.waveSpeed / params.frequency;
  const T = 1 / params.frequency; // Period

  const wrap = (x, xMax) => {
    if (x >= 0) return x - Math.floor(x/xMax) * xMax;
    return xMax - (-x - Math.floor(-x/xMax) * xMax);
  };

  const initializeEmitters = () => {
    const xs = Array(params.emitters).fill(null).map((_, i) => 
      -lambda0/4 + (i * lambda0/2)/(params.emitters-1)
    );
    const ys = Array(params.emitters).fill(0);
    const phases = Array(params.emitters).fill(null).map((_, i) => 
      (i * Math.PI/2)/(params.emitters-1)
    );

    emittersRef.current = xs.map((x, i) => ({
      r: [x, ys[i]],
      phase: phases[i],
      t0: T * (1 - phases[i]/(2 * Math.PI)),
      circles: Array(Math.ceil(100/lambda0)).fill(null).map(() => ({
        x,
        y: ys[i],
        radius: 0,
        alpha: 0
      }))
    }));
  };

  const updateEmitters = (t) => {
    const updatedCircles = [];

    emittersRef.current.forEach(emitter => {
      if (t < emitter.t0) return;

      emitter.circles.forEach((_, i) => {
        const r = i * lambda0 + wrap(
          lambda0 * emitter.phase/(2 * Math.PI) + params.waveSpeed * t,
          lambda0
        );
        
        if (r <= 100) { // rMax = 100
          updatedCircles.push({
            x: emitter.r[0],
            y: emitter.r[1],
            radius: r,
            alpha: i < ((t - emitter.t0)/T) ? 0.6 : 0
          });
        }
      });
    });

    setCircles(updatedCircles);
  };

  const animate = (timestamp) => {
    if (!isPlaying) return;
    
    const deltaTime = 1/FPS;
    timeRef.current += deltaTime;
    
    // Use current params instead of closure values
    const T = 1 / params.frequency;
    const lambda0 = params.waveSpeed / params.frequency;
    
    const updatedCircles = [];
    
    emittersRef.current.forEach(emitter => {
      if (timeRef.current < emitter.t0) return;

      emitter.circles.forEach((_, i) => {
        const r = i * lambda0 + wrap(
          lambda0 * emitter.phase/(2 * Math.PI) + params.waveSpeed * timeRef.current,
          lambda0
        );
        
        if (r <= 100) {
          updatedCircles.push({
            x: emitter.r[0],
            y: emitter.r[1],
            radius: r,
            alpha: i < ((timeRef.current - emitter.t0)/T) ? 0.6 : 0
          });
        }
      });
    });

    setCircles(updatedCircles);
    animationRef.current = requestAnimationFrame(animate);
  };

  const startSimulation = () => {
    setIsPlaying(true);
    timeRef.current = 0;
    initializeEmitters();
  };

  const stopSimulation = () => {
    setIsPlaying(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setCircles([]);
    timeRef.current = 0;
  };

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const updateParameter = (key, value) => {
    setParams(prev => ({
      ...prev,
      [key]: value
    }));
    
    // Reinitialize emitters without stopping
    initializeEmitters();
  };

  return (
    <div className="container py-8">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-tight">
            Wave Propagation Simulation
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Visualizing electromagnetic wave propagation patterns in drone defense systems
          </p>
        </CardHeader>
        <CardContent>
          <div className="relative w-full aspect-square bg-slate-950 rounded-lg overflow-hidden mb-6">
            <svg 
              viewBox={`${-X/2} ${-Y/2} ${X} ${Y}`}
              className="w-full h-full"
            >
              {/* Grid */}
              <g stroke="hsl(var(--muted-foreground)/0.2)">
                {Array(6).fill(null).map((_, i) => (
                  <React.Fragment key={i}>
                    <line
                      strokeWidth={"0.5"} 
                      x1={-X/2 + i*X/6} 
                      y1={-Y/2} 
                      x2={-X/2 + i*X/6} 
                      y2={Y/2} 
                    />
                    <line
                      strokeWidth={"0.5"} 
                      x1={-X/2} 
                      y1={-Y/2 + i*Y/6} 
                      x2={X/2} 
                      y2={-Y/2 + i*Y/6} 
                    />
                  </React.Fragment>
                ))}
              </g>

              {/* Wave circles */}
              {circles.map((circle, i) => (
                <circle
                  key={`wave-${i}`}
                  cx={circle.x}
                  cy={circle.y}
                  r={circle.radius}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                  opacity={circle.alpha}
                />
              ))}

              {/* Emitter points */}
              {Array(params.emitters).fill(null).map((_, i) => {
                const x = -lambda0/4 + (i * lambda0/2)/(params.emitters-1);
                return (
                  <circle
                    key={`emitter-${i}`}
                    cx={x}
                    cy={0}
                    r={0.4}
                    fill="hsl(var(--secondary))"
                  />
                );
              })}
            </svg>
          </div>
          
          <div className="space-y-4">
            <Button 
              variant={isPlaying ? "destructive" : "default"}
              className="w-full"
              onClick={isPlaying ? stopSimulation : startSimulation}
            >
              {isPlaying ? (
                <>
                  <Pause className="mr-2 h-4 w-4" />
                  Stop Simulation
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Start Simulation
                </>
              )}
            </Button>

            <Accordion type="single" collapsible>
              <AccordionItem value="controls">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <Settings2 className="mr-2 h-4 w-4" />
                    Simulation Controls
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-4">
                    {/* Frequency Control */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-medium">
                          Frequency (Hz)
                        </label>
                        <span className="text-sm text-muted-foreground">
                          {params.frequency.toFixed(2)}
                        </span>
                      </div>
                      <Slider
                        value={[params.frequency]}
                        min={0.1}
                        max={1.0}
                        step={0.1}
                        onValueChange={([value]) => updateParameter('frequency', value)}
                      />
                    </div>

                    {/* Wave Speed Control */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-medium">
                          Wave Speed (m/s)
                        </label>
                        <span className="text-sm text-muted-foreground">
                          {params.waveSpeed.toFixed(1)}
                        </span>
                      </div>
                      <Slider
                        value={[params.waveSpeed]}
                        min={1}
                        max={10}
                        step={0.5}
                        onValueChange={([value]) => updateParameter('waveSpeed', value)}
                      />
                    </div>

                    {/* Number of Emitters Control */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-medium">
                          Number of Emitters
                        </label>
                        <span className="text-sm text-muted-foreground">
                          {params.emitters}
                        </span>
                      </div>
                      <Slider
                        value={[params.emitters]}
                        min={2}
                        max={12}
                        step={1}
                        onValueChange={([value]) => updateParameter('emitters', value)}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-sm text-muted-foreground">
              <h3 className="font-semibold mb-2">Current Parameters:</h3>
              <ul className="space-y-1">
                <li>• Frequency: {params.frequency} Hz</li>
                <li>• Wave Speed: {params.waveSpeed} m/s</li>
                <li>• Wavelength: {lambda0.toFixed(2)} m</li>
                <li>• Number of Emitters: {params.emitters}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaveSimulation;