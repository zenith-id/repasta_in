type WhatsAppClickParams = {
  location: string;
  serviceName?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick({ location, serviceName }: WhatsAppClickParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "whatsapp_click", {
    cta_location: location,
    service_name: serviceName ?? "",
    page_path: window.location.pathname,
  });
}
