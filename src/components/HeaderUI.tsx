import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

export default function HeaderUI() {
  const [openMain, setOpenMain] = useState(false)
  const [openVideoConfirm, setOpenVideoConfirm] = useState(false)

  const openCV = () => {
    window.open('https://enrique2305-gif.github.io/curriculum/', '_blank')
    setOpenMain(false)
  }

  const openVideo = () => {
    window.open('https://www.youtube.com/watch?v=1qH8Ybbpqrs', '_blank')
    setOpenVideoConfirm(false)
  }

  return (
    <>
      {/* TÍTULO */}
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        Dashboard del Clima by{' '}
        <span
          onClick={() => setOpenMain(true)}
          style={{
            cursor: 'pointer',
            color: 'inherit',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Enrique Rosado
        </span>
      </Typography>

      {/* MODAL 1 */}
      <Dialog open={openMain} onClose={() => setOpenMain(false)}>
        <DialogTitle>👋 Hola</DialogTitle>
        <DialogContent>
          ¿Te gustaría conocer más de mí o ver un video mío?
        </DialogContent>
        <DialogActions>
          <Button onClick={openCV}>
            Conocer más de mí
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setOpenMain(false)
              setOpenVideoConfirm(true)
            }}
          >
            Ver video mío
          </Button>
        </DialogActions>
      </Dialog>

      {/* MODAL 2 */}
      <Dialog
        open={openVideoConfirm}
        onClose={() => setOpenVideoConfirm(false)}
      >
        <DialogTitle>😏 Confirmación importante</DialogTitle>
        <DialogContent>
          ¿Estás seguro seguro de ver ese video?
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={openVideo}>
            Sí
          </Button>
          <Button variant="contained" onClick={openVideo}>
            Sí
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
