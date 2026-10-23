const accent = '#7c5cff'

export const repo = 'https://github.com/Peuraud-Pierre/vinyl'
export const downloads = {
  mac: `${repo}/releases/latest/download/Vinyl.dmg`,
  windows: `${repo}/releases/latest/download/Vinyl-Setup.exe`,
  releases: `${repo}/releases`,
}

// Positions du disque section par section : droite, gauche, droite, gauche, centre
export const stops = [
  { left: 72, size: 46, color: accent },
  { left: 22, size: 52, color: '#ff6a3d' },
  { left: 78, size: 50, color: '#2fd3ff' },
  { left: 20, size: 48, color: '#ffb02e' },
  { left: 50, size: 58, color: accent },
]

// Ce qu'affiche le mini-lecteur, section par section
export const tracks = [
  { title: 'Face A · Le morceau en cours', artist: 'Apple Music · Spotify' },
  { title: 'Face A · La platine', artist: '33⅓ tours/min, bras de lecture' },
  { title: 'Face B · Habillez le disque', artist: 'Textures, couleur, craquement' },
  { title: 'Face B · Toute la discothèque', artist: 'Playlists, albums, artistes' },
  { title: 'Face B · Posez le diamant', artist: 'Mac · Windows' },
]

// Textures du disque, comme dans Vinyl → Personnaliser
export const textures = [
  { id: 'black', label: 'Noir', text: 'Le 33 tours classique : sillons noirs, pochette en étiquette au centre.' },
  { id: 'picture', label: 'Picture disc', text: 'La pochette de l’album imprimée sur tout le disque.' },
  { id: 'yolk', label: 'Yolk', text: 'Un cœur de couleur dans un anneau clair, comme un jaune d’œuf.' },
  { id: 'split', label: 'Split', text: 'Deux couleurs, moitié-moitié, pour les éditions collector.' },
  { id: 'solid', label: 'Couleur unie', text: 'Un vinyle coloré et translucide, à la couleur de votre thème.' },
]

// Fond du disque selon la texture (repris de frontend/src/turntable/textures.ts dans Vinyl)
export function discBackground(texture, a, b = '#fff3d6') {
  switch (texture) {
    case 'picture':
      return 'conic-gradient(from 200deg, #ff6a3d, #7c5cff, #2fd3ff, #ffb02e, #ff6a3d)'
    case 'yolk':
      return `radial-gradient(circle, ${a} 0 42%, ${b} 46% 100%)`
    case 'split':
      return `linear-gradient(90deg, ${a} 50%, ${b} 50%)`
    case 'solid':
      return `radial-gradient(circle, ${a}cc, ${a}88)`
    default:
      return null
  }
}
