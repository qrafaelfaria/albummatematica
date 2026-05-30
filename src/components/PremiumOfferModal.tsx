import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Check, AlertTriangle, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PremiumOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onDecline: () => void;
  premiumUrl: string;
}

const PremiumOfferModal: React.FC<PremiumOfferModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  onDecline,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90%] w-[380px] rounded-[28px] p-0 border-none bg-white overflow-hidden outline-none">
        <div className="flex flex-col items-center text-center p-5 sm:p-6">
          
          {/* Top Alert Badge */}
          <div className="bg-[#b45309] text-white px-3 py-1 rounded-full flex items-center gap-1.5 mb-4 animate-pulse">
            <AlertTriangle className="w-3.5 h-3.5 fill-yellow-400 text-[#b45309]" />
            <span className="text-[9px] font-black uppercase tracking-widest">
              Espera! Não vá embora ainda
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-[900] text-slate-900 leading-tight mb-1 uppercase tracking-tighter">
            Pacote Premium
          </h2>
          <p className="text-[#ef4444] font-bold text-[13px] mb-4">
            com um desconto especial!
          </p>

          {/* Bonus Box */}
          <div className="w-full bg-[#fffbeb] border-2 border-[#fcd34d] rounded-xl p-3 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base">🎁</span>
              <span className="text-[#b45309] font-black text-[11px] uppercase tracking-wider">
                + 6 Bônus Exclusivos
              </span>
            </div>
            
            <ul className="grid grid-cols-1 gap-1 text-left">
              {[
                "Figurinhas Editáveis",
                "Dinâmicas Divertidas",
                "Banco de Avaliações",
                "Plano de Aulas",
                "Caderno de Colorir",
                "50 Curiosidades",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <div className="bg-[#22c55e] rounded-[3px] p-0.5 shrink-0">
                    <Check className="w-2.5 h-2.5 text-white stroke-[4]" />
                  </div>
                  <span className="text-[12px] font-bold text-slate-700 leading-tight">
                    <span className="font-black text-slate-900">Bônus {i + 1} -</span> {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Box */}
          <div className="w-full bg-slate-50 rounded-xl p-4 border border-slate-100 mb-4">
            <div className="text-[#ef4444] font-bold text-xs mb-0.5">
              de <span className="line-through">R$ 19,90</span> por apenas
            </div>
            <div className="text-[#22c55e] text-4xl sm:text-5xl font-[900] leading-none mb-1 tracking-tighter">
              R$ 14,90
            </div>
            <div className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
              ou 3x de R$ 5,41 no cartão*
            </div>
          </div>

          <div className="w-full space-y-3">
            <Button
              onClick={onConfirm}
              className="w-full h-12 bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-xl text-base font-black uppercase tracking-wide shadow-[0_4px_0_rgb(21,128,61)] active:translate-y-1 active:shadow-none transition-all"
            >
              QUERO MEU DESCONTO!
            </Button>
            
            <button
              onClick={onDecline}
              className="text-slate-400 font-bold text-[11px] uppercase tracking-widest hover:text-slate-600 transition-colors underline underline-offset-4"
            >
              NÃO, QUERO SOMENTE O BÁSICO.
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PremiumOfferModal;
