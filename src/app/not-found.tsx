import Link from "next/link"

const NotFound = () => {
    return(
        <div>
            <h1>404 - Página não encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <Link href="/">Retornar para a página inicial</Link>
        </div>
    )
}

export default NotFound;