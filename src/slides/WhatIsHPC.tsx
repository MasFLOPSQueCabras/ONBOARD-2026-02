import { Slide } from "../components/RevealDeck";
import { SlideSection } from "../components/SlideSection";
import { FeatureGrid, FeatureItem } from "../components/FeatureGrid";

export function WhatIsHPC() {
  return (
    <Slide>
      <SlideSection
        brand="MFQC // HPC"
        meta="ARQUITECTURA DE CLÚSTER"
        title={
          <>
            ¿Qué es un clúster <span className="text-mfqc-yellow">HPC</span>?
          </>
        }
        lead="Múltiples servidores interconectados que operan como un solo supercomputador para resolver problemas masivos."
      >
        <FeatureGrid>
          <FeatureItem tag="01 / CÓMPUTO" title="Nodos Densos">
            Servidores con múltiples CPUs multinúcleo y aceleradores GPU trabajando en paralelo.
          </FeatureItem>

          <FeatureItem tag="02 / RED" title="Interconexión" accent="cyan">
            Redes como <strong className="text-mfqc-cyan">InfiniBand</strong> con latencia de
            microsegundos y cientos de Gb/s.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // HPC"
        meta="DATOS Y ORQUESTACIÓN"
        title={
          <>
            Datos &amp; <span className="text-mfqc-cyan">Orquestación</span>
          </>
        }
        lead="Un clúster de alto rendimiento requiere acceso masivo a datos compartidos y un planificador central."
      >
        <FeatureGrid>
          <FeatureItem tag="03 / STORAGE" title="Almacenamiento Paralelo">
            Sistemas de archivos distribuidos (Lustre, BeeGFS, NFS) accesibles simultáneamente por
            todos los nodos.
          </FeatureItem>

          <FeatureItem tag="04 / SCHEDULER" title="Slurm" accent="cyan">
            El &ldquo;cerebro&rdquo; del clúster que asigna recursos y coordina quién corre qué y
            cuándo.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>

      <SlideSection
        brand="MFQC // SCC"
        meta="STUDENT CLUSTER COMPETITION"
        title={
          <>
            ¿Qué es <span className="text-mfqc-yellow">SCC</span>?
          </>
        }
        lead={
          <>
            <strong className="text-white">Student Cluster Competition:</strong> Diseñar, levantar y
            exprimir un supercomputador real contra reloj.
          </>
        }
      >
        <FeatureGrid>
          <FeatureItem tag="3000 W / LÍMITE" title="Hardware & Energía">
            Configurar desde cero Linux, redes, compiladores y MPI sin exceder el presupuesto
            energético ni de nodos.
          </FeatureItem>

          <FeatureItem tag="48 HRS / CARRERA" title="Benchmarks & Ciencia" accent="cyan">
            Romper récords de FLOPS en <strong className="text-mfqc-yellow">HPL / HPCG</strong> y
            acelerar aplicaciones científicas reales e IA.
          </FeatureItem>
        </FeatureGrid>
      </SlideSection>
    </Slide>
  );
}
