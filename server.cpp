/*
    Este servidor está sendo desenvolvido por: Francisco Passos, o chavoso 😎. 
    Apenas testes e configuações básicas aqui...

    Criado em: 01/05/2025

    A ideia é criar um servidor local que hospeda o site utilizando C++ e suas respectivas bibliotecas.
    última modificação: 01/05/2025
*/

#include <iostream>
#include <fstream> 
#include <sstream>

#include "httplib.h" //biblioteca responsável pelo funcionamento do servidor

int main(int argc, char* argv[]){
    httplib::Server server;

    //Responsável por acessar o index e retornar o conteúdo para o navegador :: Minha primeira vez usando função lambda com C++
    server.Get("/", [](const httplib::Request&, httplib::Response& res){
        std::ifstream file("index.html");
        std::stringstream buffer;
        buffer << file.rdbuf();
        res.set_content(buffer.str(), "text/html");
    });

    //mensagem mostrando que está tudo ok
    std::cout << "Tudo correto por aqui!\n";
    std::cout << "Servidor em: http://localhost:8080\n";

    //ativando o servidor
    server.listen("0.0.0.0", 8080);
}
