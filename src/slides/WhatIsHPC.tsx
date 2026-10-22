import { Slide } from "@revealjs/react";

export function WhatIsHPC() {
  return (
    <Slide>
      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // HPC</span>
            <span className="mfqc-topbar-meta">SYS.01 — ARQUITECTURA DE CLÚSTER</span>
          </div>

          <div className="mfqc-body">
            <div>
              <h2 className="mfqc-headline">
                ¿Qué es un clúster <span style={{ color: "#ffe600" }}>HPC</span>?
              </h2>
              <p className="mfqc-lead">
                Múltiples servidores interconectados que operan como un solo supercomputador para
                resolver problemas masivos.
              </p>
            </div>

            <div className="mfqc-split-2">
              <div className="mfqc-col">
                <span className="mfqc-col-num">01 / CÓMPUTO</span>
                <h3>Nodos Densos</h3>
                <p>
                  Servidores con múltiples CPUs multinúcleo y aceleradores GPU trabajando en
                  paralelo.
                </p>
              </div>

              <div className="mfqc-col cyan">
                <span className="mfqc-col-num">02 / RED</span>
                <h3>Interconexión</h3>
                <p>
                  Redes como <strong style={{ color: "#00f5d4" }}>InfiniBand</strong> con latencia
                  de microsegundos y cientos de Gb/s.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // HPC</span>
            <span className="mfqc-topbar-meta">SYS.01B — DATOS Y ORQUESTACIÓN</span>
          </div>

          <div className="mfqc-body">
            <div>
              <h2 className="mfqc-headline">
                Datos &amp; <span style={{ color: "#00f5d4" }}>Orquestación</span>
              </h2>
            </div>

            <div className="mfqc-split-2">
              <div className="mfqc-col">
                <span className="mfqc-col-num">03 / STORAGE</span>
                <h3>Almacenamiento Paralelo</h3>
                <p>
                  Sistemas de archivos distribuidos (Lustre, BeeGFS, NFS) accesibles simultáneamente
                  por todos los nodos.
                </p>
              </div>

              <div className="mfqc-col cyan">
                <span className="mfqc-col-num">04 / SCHEDULER</span>
                <h3>Slurm</h3>
                <p>
                  El &ldquo;cerebro&rdquo; del clúster que asigna recursos y coordina quién corre
                  qué y cuándo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // SCC</span>
            <span className="mfqc-topbar-meta">SYS.01C — STUDENT CLUSTER COMPETITION</span>
          </div>

          <div className="mfqc-body">
            <div>
              <h2 className="mfqc-headline">
                ¿Qué es <span style={{ color: "#ffe600" }}>SCC</span>?
              </h2>
              <p className="mfqc-lead">
                <strong>Student Cluster Competition:</strong> Diseñar, levantar y exprimir un
                supercomputador real contra reloj.
              </p>
            </div>

            <div className="mfqc-split-2">
              <div className="mfqc-col">
                <span className="mfqc-col-num">3000 W / LÍMITE</span>
                <h3>Hardware &amp; Energía</h3>
                <p>
                  Configurar desde cero Linux, redes, compiladores y MPI sin exceder el presupuesto
                  energético ni de nodos.
                </p>
              </div>

              <div className="mfqc-col cyan">
                <span className="mfqc-col-num">48 HRS / CARRERA</span>
                <h3>Benchmarks &amp; Ciencia</h3>
                <p>
                  Romper récords de FLOPS en{" "}
                  <strong style={{ color: "#ffe600" }}>HPL / HPCG</strong> y acelerar aplicaciones
                  científicas reales e IA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
}
