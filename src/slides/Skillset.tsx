import { Slide } from "@revealjs/react";

export function Skillset() {
  return (
    <Slide>
      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // SKILLSET</span>
            <span className="mfqc-topbar-meta">SYS.06 — HABILIDADES QUE APRENDERÁS</span>
          </div>

          <div className="mfqc-body">
            <div>
              <h2 className="mfqc-headline">
                ¿Qué aprenderás en el <span style={{ color: "#ffe600" }}>Grupo</span>?
              </h2>
              <p className="mfqc-lead">
                Habilidades prácticas de ingeniería de sistemas, hardware y alto rendimiento que no
                se ven en una clase tradicional.
              </p>
            </div>

            <div className="mfqc-split-2">
              <div className="mfqc-col">
                <span className="mfqc-col-num">01 / INFRA-DEVOPS &amp; HPC-OPS</span>
                <h3>Sysadmin de Alto Nivel</h3>
                <p>
                  Administración de Linux bare-metal, BMC, redes InfiniBand, orquestación con{" "}
                  <strong>Slurm</strong>, Spack y automatización.
                </p>
              </div>

              <div className="mfqc-col cyan">
                <span className="mfqc-col-num">02 / GPUs &amp; ACELERADORES</span>
                <h3>Programación Paralela</h3>
                <p>
                  Exprimir CPUs, GPUs y aceleradores con{" "}
                  <strong style={{ color: "#ffe600" }}>Mojo 🔥</strong>, CUDA, MPI, OpenMP y
                  vectorización SIMD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // SKILLSET</span>
            <span className="mfqc-topbar-meta">SYS.06B — CIENCIA Y OBSERVABILIDAD</span>
          </div>

          <div className="mfqc-body">
            <div>
              <h2 className="mfqc-headline">
                Ciencia, <span style={{ color: "#00f5d4" }}>Profilers</span> &amp;{" "}
                <span style={{ color: "#ffe600" }}>eBPF</span>
              </h2>
            </div>

            <div className="mfqc-split-2">
              <div className="mfqc-col">
                <span className="mfqc-col-num">03 / CÓMPUTO CIENTÍFICO</span>
                <h3>Simulaciones &amp; Métodos Numéricos</h3>
                <p>
                  Álgebra lineal densa y dispersa (BLAS, HPL), métodos numéricos a gran escala y
                  simulaciones físicas e IA.
                </p>
              </div>

              <div className="mfqc-col cyan">
                <span className="mfqc-col-num">04 / HERRAMIENTAS CURIOSAS</span>
                <h3>Profilers &amp; eBPF</h3>
                <p>
                  Radiografía en vivo del sistema usando profilers de hardware (<code>perf</code>,
                  Nsight), herramientas de HPC y trazado del kernel con{" "}
                  <strong style={{ color: "#00f5d4" }}>eBPF</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mfqc-frame">
          <div className="mfqc-topbar">
            <span className="mfqc-topbar-brand">MFQC // MINDSET</span>
            <span className="mfqc-topbar-meta">SYS.06C — MÁS ALLÁ DEL HPC</span>
          </div>

          <div className="mfqc-body">
            <div>
              <h2 className="mfqc-headline">
                Mentalidad de <span style={{ color: "#ffe600" }}>Performance</span> ⚡
              </h2>
              <p className="mfqc-lead">
                Entender la máquina por debajo transforma cómo diseñas y optimizas{" "}
                <strong>cualquier software</strong>.
              </p>
            </div>

            <div className="mfqc-split-2">
              <div className="mfqc-col">
                <span className="mfqc-col-num">BACKEND &amp; BASES DE DATOS</span>
                <h3>Sistemas de Baja Latencia</h3>
                <p>
                  Optimizar consultas, localidad en caché, concurrencia, memoria e I/O de red y
                  disco en servicios críticos.
                </p>
              </div>

              <div className="mfqc-col cyan">
                <span className="mfqc-col-num">FRONTEND &amp; CUALQUIER APP</span>
                <h3>Ingeniería Basada en Datos</h3>
                <p>
                  No adivinar por qué algo es lento: medir, perfilar cuellos de botella reales y
                  acelerar desde el navegador hasta el servidor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
}
