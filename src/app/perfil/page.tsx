// src/app/perfil/page.tsx
import { Suspense } from "react";
import PerfilContent from "./perfilContent";

export default function PerfilPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <PerfilContent />
    </Suspense>
  );
}
