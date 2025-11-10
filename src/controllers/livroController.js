import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({})
            res.status(200).send(listaLivros);
        } catch (erro){
            res.status(500).json({message: `${erro.message}- falha na requisição`})
        }
    };

    static async listarLivroPorId (req, res) {
        try {
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)
            res.status(200).send(livroEncontrado);
        } catch (erro){
            res.status(500).json({message: `${erro.message}- falha na requisição do livro`})
        }
    };

    static async cadastraLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "Criado com sucesso!", livro: novoLivro});
        } catch (erro) {
            res.status(500).json({message: `${erro.message}- falha ao cadastrar livro`})
        }
    }

        static async atualizarLivro (req, res) {
        try {
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.obdy)
            res.status(200).send({message: "Livro atualizado" });
        } catch (erro){
            res.status(500).json({message: `${erro.message}- falha na atualização`})
        }
    };

};


export default LivroController;
