import {libro} from '../models/libro.js'

export const getLibros = async(req, res) => {
    try {
        const libros = await libro.findAll()
        res.json(libros)
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const createLibros = async (req, res) => {
    const { libro_isbn, libro_titulo, fk_autor_id } = req.body
    try {
        const newLibro = await libro.create({
            libro_isbn,
            libro_titulo,
            fk_autor_id
        })
        res.json(newLibro)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const createAutores = async (req, res) => {
    const { autor_nombre, autor_apellido } = req.body

    try {
        const newAutor = await autor.create({
            autor_nombre,
            autor_apellido
        })
        res.json(newAutor)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}