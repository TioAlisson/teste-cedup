export const normalizarTexto = (texto: string): string => {
    return texto
        .trim()  // Remove espaços extras no início e fim
        .normalize('NFD')  // Normaliza para separar caracteres com acento
        .replace(/[\u0300-\u036f]/g, '')  // Remove os acentos
        .replace(/[^a-zA-Z0-9\s-]/g, '')  // Remove caracteres especiais (ex: &, %, $, etc.)
        .replace(/\s+/g, '-')  // Substitui espaços por "-"
        .toLowerCase();  // Converte para minúsculo
};
