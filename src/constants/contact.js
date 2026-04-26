export const WHATSAPP_NUMBER = "12512555852";
export const WHATSAPP_DEFAULT_MESSAGE = encodeURIComponent("Hi, I want to know more about Mathedemic tutoring services.");
export const WHATSAPP_BOOKING_MESSAGE = encodeURIComponent("Hi, I'd like to book a free demo class with Mathedemic. Please let me know the available slots.");
export const WHATSAPP_PRICING_MESSAGE = encodeURIComponent("Hi, I'd like to know more about Mathedemic's tutoring plans and pricing.");

export const waLink = (message = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
