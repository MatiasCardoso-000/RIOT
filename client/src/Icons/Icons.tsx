import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppIcon = () => {
  return (
    <a
      href={"https://wa.me/5491162373100?text=Hola,%20quiero%20hacer%20una%20consulta"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12"
      title="Consultar por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};
