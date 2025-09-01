/*
    Este servidor está sendo desenvolvido por: Francisco Passos, o chavoso 😎. 
    Apenas testes e configuações básicas aqui...

    Criado em: 01/05/2025

    A ideia é criar um servidor local que hospeda o site utilizando C++ e suas respectivas bibliotecas.
    última modificação: 01/05/2025

    [] Teste básico, talvez eu nunca finalize: Tenho outros projetos não finalizados que precisam ser abandonados :/
    [] O servidor é local -> "http://localhost:8080" -> Por enquanto...

    ---------------------------------COMPILAÇÃO---------------------------------
    [] g++ server.cpp -o server
    [] ./server
*/

#include <iostream>
#include <fstream> 
#include <sstream>

#include "httplib.h" //biblioteca responsável pelo funcionamento do servidor

int main(int argc, char* argv[]){
    httplib::Server server;

    // Monta a pasta "server-test" como raiz dos arquivos estáticos
    server.set_mount_point("/", "./Server-Test");

    //mensagem mostrando que está tudo ok
    std::cout << "Tudo correto por aqui!\n";
    std::cout << "Servidor em: http://localhost:8080\n";

    //ativando o servidor
    server.listen("0.0.0.0", 8080);
}
