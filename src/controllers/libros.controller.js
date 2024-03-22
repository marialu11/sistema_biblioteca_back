export const getLibros = (req, res) => {
    res.send('Trayendo libros')
}

export const createLibros = (req, res) => {
    console.log(req.body)
    res.send('Creando libros')
}