const accent = '#7c5cff'

// Positions du disque section par section : droite, gauche, droite, gauche, centre
export const stops = [
  { left: 72, size: 46, color: accent },
  { left: 22, size: 52, color: '#ff6a3d' },
  { left: 78, size: 50, color: '#2fd3ff' },
  { left: 20, size: 48, color: '#ffb02e' },
  { left: 50, size: 58, color: accent },
]

export const tracks = [
  { title: '[Titre du morceau 1]', artist: '[Artiste] — [Album]' },
  { title: '[Titre du morceau 2]', artist: '[Artiste] — [Album]' },
  { title: '[Titre du morceau 3]', artist: '[Artiste] — [Album]' },
  { title: '[Titre du morceau 4]', artist: '[Artiste] — [Album]' },
  { title: '[Titre du morceau 5]', artist: '[Artiste] — [Album]' },
]

export const moods = [
  { id: 'pur', label: 'Pur', text: 'Le son tel qu’il a été enregistré, sans aucun effet.' },
  { id: 'chaleur', label: 'Chaleur vinyle', text: 'Des basses rondes et des aigus adoucis, comme sur une platine.' },
  { id: 'craque', label: 'Craquements', text: 'Le léger crépitement du sillon, pour une écoute au coin du feu.' },
]
