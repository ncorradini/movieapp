export const pages = ['Acción', 'Terror', 'Drama', 'Animadas'];

export const convertLinks = (type) => {
  switch (type) {
    case 'Acción': return 'action';
    case 'Terror': return 'horror';
    case 'Drama': return 'drama';
    case 'Animadas': return 'animation';
  }
};
