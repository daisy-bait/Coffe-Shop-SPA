export const timeAgo = (updatedAt) => {
  const date = new Date(updatedAt);
  const now = new Date();

  const diffMs = now - date;          // diferencia en milisegundos
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHours = Math.floor(diffMin / 60);

  // Menos de 1 minuto
  if (diffSec < 60) {
    return "Hace un momento";
  }

  // Menos de 1 hora
  if (diffMin < 60) {
    return `Hace ${diffMin} minuto${diffMin === 1 ? "" : "s"}`;
  }

  // Menos de 24 horas
  if (diffHours < 24) {
    return `Hace ${diffHours} hora${diffHours === 1 ? "" : "s"}`;
  }

  // Más de 24 horas → Formato completo
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const dia = date.getDate();
  const mes = meses[date.getMonth()];
  const año = date.getFullYear();

  return `Publicado el ${dia} de ${mes} de ${año}`;
};
