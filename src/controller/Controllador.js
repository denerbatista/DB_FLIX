// import { user } from "pg/lib/defaults"
import {
    connection
} from "../database/connection.js"
import {
    filmes
} from "../model/filmes.js"

export let message = "";

export const getIndex = async (req, res) => {
    setTimeout(() => {
        message = "";
      }, 1000);
    try {
        
        // const listFilmes = await connection.query('SELECT * FROM filmes', {
        //     model: filmes
        // })
        const listFilmes = await filmes.findAll()
        console.log(listFilmes)
        res.render('index.ejs', {
            listFilmes,message
        })
    } catch(error) {
        res.send(error.message)
    }
}

export const getDetalhes = async (req, res) => {
    try {
        // const filmesDetalhes = await connection.query(`SELECT * FROM filmes WHERE id = ${req.params.id}`)
        const filmesDetalhes = await filmes.findByPk(req.params.id)
        res.render('detalhes.ejs', {
            filmesDetalhes,message
        })
    }
    catch(error){
        res.send(error.message)
    }
}

export const getDeletar = async (req, res) => {
    try {
        // await connection.query(`DELETE FROM filmes WHERE id = ${req.params.id}`)
        await filmes.destroy({
            where: {
                id: req.params.id
            }
        })
        message='Filme Removido com Sucesso!'
        res.redirect('/')
    }
    catch(error){
        res.send(error.message)
    }
}

export const getCriar = (req, res) => {
    res.render('criar.ejs',{message})
}

export const postCriar = async (req, res) => {
    let { nome, diretor, img, duracao, ano, iframe } = req.body
    
        try {
        // await connection.query(`INSERT INTO filmes (nome, diretor, img, duracao, ano, iframe) VALUES('${nome}', '${diretor}', '${img}', ${duracao}, '${ano}', '${iframe}')`) 
        if(!nome || !diretor || !img || !duracao || !ano || !iframe){
            message='Error todos os campos devem ser preenchidos!'
            res.redirect('/criar')
        } else {
            await filmes.create({nome, diretor, img, duracao, ano, iframe})
            message='Filme Adicionado com Sucesso!'
            res.redirect('/')
        }
    }
    catch(error){
        res.send(error.message)
    }
}

export const getEditar = async (req, res) => {
    try {
        const filmeAtual = await filmes.findByPk(req.params.id)
        res.render('editar.ejs', {
            filmeAtual,message
        })
    }
    catch(error){
        res.send(error.message)
    }
}

export const postEditar = async (req, res) => {
    try {
        let { nome, diretor, img, duracao, ano, iframe } = req.body
            await filmes.update({
            nome: nome,
            diretor: diretor,
            img: img,
            duracao: duracao,
            ano: ano,
            iframe: iframe
        }, {
            where: {
                id: req.params.id
            }
        })
        message='Filme editado com Sucesso!'
        res.redirect('/')
    }
    catch(error){
        res.send(error.message)
    }
}