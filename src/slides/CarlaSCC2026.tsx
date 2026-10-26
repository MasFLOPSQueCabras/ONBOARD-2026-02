import { Slide } from "../components/RevealDeck";
import carlaGroupPhoto from "../assets/CARLA_SCC_GROUP.jpeg";
import { SlideSection } from "../components/SlideSection";
import { FeatureItem } from "../components/FeatureGrid";

export function CarlaSCC2026() {
  return (
    <Slide>
      {/* 1a. HITO CARLA 2026 */}
      <SlideSection brand="MFQC // CARLA 2026" meta="EXPERIENCIA EN COMPETENCIA">
        <div className="flex max-w-[1100px] flex-col gap-3 @min-[768px]/deck:gap-6">
          <h2 className="font-display text-[26px]! leading-[1.12]! font-extrabold text-white @min-[768px]/deck:text-[64px]! @min-[768px]/deck:leading-[1.06]!">
            Hito: <span className="text-mfqc-yellow">SCC CARLA 2026</span>
          </h2>

          <p className="m-0! font-sans text-[13.5px]! leading-[1.42]! text-mfqc-gray @min-[768px]/deck:text-[24px]! @min-[768px]/deck:leading-[1.5]!">
            Representamos a la universidad en la competencia latinoamericana de supercomputación
            enfrentando hardware bare-metal e infraestructura de centro de datos real.
          </p>

          <FeatureItem tag="HARDWARE REAL BAJO PRESIÓN" title="BMC, Infraestructura & HPL">
            Gestión remota por <strong className="text-white">BMC</strong>, resolución de fallos
            críticos de infraestructura en caliente y tuning extremo de{" "}
            <strong className="text-white">InfiniBand + librerías BLAS</strong>.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 1b. FOTOGRAFÍA DEL EQUIPO */}
      <SlideSection brand="MFQC // EQUIPO" meta="FOTOGRAFÍA OFICIAL DEL EQUIPO">
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src={carlaGroupPhoto}
            alt="Equipo Más FLOPS que Cabras en SCC CARLA 2026"
            width={720}
            height={520}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="max-h-[300px] w-full max-w-[720px] border-4 border-mfqc-yellow object-cover shadow-[8px_8px_0px_#00f5d4] @min-[768px]/deck:max-h-[520px] @min-[768px]/deck:shadow-[14px_14px_0px_#00f5d4]"
          />
          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <span className="font-mono text-[11px] font-bold tracking-wide text-mfqc-cyan uppercase @min-[768px]/deck:text-[15px]">
              Semillero Más FLOPS que Cabras
            </span>
            <span className="font-mono text-[9.5px] font-semibold tracking-wider text-mfqc-yellow uppercase @min-[768px]/deck:text-[12px]">
              [ Equipo UniAndes · CARLA SCC 2026 ]
            </span>
          </div>
        </div>
      </SlideSection>

      {/* 2a. DOMINIO: BMC & BAREMETAL */}
      <SlideSection
        brand="MFQC // CARLA 2026"
        meta="INFRAESTRUCTURA & BARE-METAL"
        title={
          <>
            Dominio Técnico: <span className="text-mfqc-cyan">BMC &amp; Baremetal</span>
          </>
        }
        lead="Operar servidores reales requiere entender la máquina mucho antes de que el kernel de Linux arranque."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="01 / BAREMETAL & INFRA" title="Control Fuera de Banda (BMC)">
            Administración remota a bajo nivel mediante{" "}
            <strong className="text-white">BMC / IPMI</strong>, aprovisionamiento de nodos desde
            cero y resolución de fallos críticos de hardware y red en tiempo real durante la
            competencia.
          </FeatureItem>
        </div>
      </SlideSection>

      {/* 2b. DOMINIO: INFINIBAND & HPL */}
      <SlideSection
        brand="MFQC // CARLA 2026"
        meta="MÁXIMO RENDIMIENTO: HPL & BLAS"
        title={
          <>
            Dominio Técnico: <span className="text-mfqc-yellow">InfiniBand &amp; HPL</span>
          </>
        }
        lead="Exprimir cada FLOP del silicio ajustando la interconexión y las librerías matemáticas."
      >
        <div className="max-w-[1100px]">
          <FeatureItem tag="02 / MÁXIMO RENDIMIENTO" title="InfiniBand, BLAS & HPL" accent="cyan">
            Ajuste fino de redes <strong className="text-mfqc-cyan">InfiniBand</strong> y librerías
            matemáticas <strong className="text-mfqc-yellow">BLAS/LAPACK</strong> aceleradas para
            romper marcas en <strong className="text-white">HPL (Linpack)</strong> sin exceder el
            presupuesto energético.
          </FeatureItem>
        </div>
      </SlideSection>
    </Slide>
  );
}
