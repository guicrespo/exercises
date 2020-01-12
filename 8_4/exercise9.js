// Agora é hora de criar duas classes, elas simularão uma mensagem e um servidor de email. Os requisitos para cada uma delas são:
// A primeira classe deve ser chamada de EmailMessage, possuir os atributos from, to, subject e content, representando respectivamento o email de quem envia, o email de quem recebe, o assunto e o conteúdo da mensagem. Na construção de um objeto do tipo EmailMessage o atributo from deve ser configurado para o valor undefined e todos os outros serão recebidos via parametro e na ordem em que foram descritos.
// A segunda classe deve ser chamada de EmailServer, possuir os atributos owner e sent_messages, representando respectivamente o email de quem envia e a lista de mensagens enviadas. Na construção de um objeto do tipo EmailServer o atributo sent_messages deve ser configurado para o valor de uma lista vazia e owner será recebido via parametro.
// EmailServer deve possuir a função createMessage que recebe como parâmetro o email de quem receberá a mensagem, o assunto e conteúdo da mensagem. Esta função deve retornar um objeto do tipo EmailMessage com os atributos configurados.
// EmailServer deve possuir a função sendMessage que recebe como parâmetro um objeto do tipo EmailMessage. Esta função deve retornar a mensagem enviada, mas antes deve configurar o atributo no objeto EmailMessage referente ao email de quem envia e adicionar a mensagem à lista de mensagens enviadas.

const assert = require("assert")

// estrutura a classe EmailMessage, com todos seus atributos 
class EmailMessage {
 constructor(to, subject, content) {
  this.from = undefined;
  this.to = to;
  this.subject = subject;
  this.content = content;
 }
}

class EmailServer {
  constructor(owner) { //necessário passar o parâmetro do EmailServer, para que o from, que está undefined, seja preenchido posteriormente
    this.owner = owner
    this.sent_messages = [];
  }

  createMessage(to, subject, content) { //cria uma nova mensagem. Para isso, passa como parâmetros os mesmos itens do objeto EmailMessage. Depois cria um novo EmailMessage que vai imprimir como parâmetros exatamente as informações passadas nessa função
    return new EmailMessage(to, subject, content);
  }

  sendMessage(EmailMessage) { // passa como parâmetro o objeto criado na função anterior
    EmailMessage.from = this.owner; // estabelece que o item from terá o mesmo valor do this.owner, passado como parâmetro nesta classe. para acessar o item de uma classe, basta colocar o nnomeDaClasse.item
    this.sent_messages.push(EmailMessage); // insere o objeto EmailMessages no array sent_messages criado nesta classe
    return EmailMessage; //retorna o objeto já com todas as informações preenchidas
  }
}

// solução das funções createMessage e sendMessage copiada do Miguel. Cheguei perto, no raciocínio, mas não tava acertando a sintaxe de jeito nenhum.
// depois de analisar com cuidado o código dele (console.log foi bem útil) consegui entender.

assert.equal(typeof EmailMessage.prototype, "object")
let msg1 = new EmailMessage("tryber@betrybe.com", "Email Message", "Esse aqui é o conteúdo da mensagem")
assert.equal(msg1.from, undefined)
assert.equal(msg1.to, "tryber@betrybe.com")
assert.equal(msg1.subject, "Email Message")
assert.equal(msg1.content, "Esse aqui é o conteúdo da mensagem")

assert.equal(typeof EmailServer.prototype, "object")
let server1 = new EmailServer("my-email@betrybe.com")
assert.equal(server1.owner, "my-email@betrybe.com")
assert.equal(server1.sent_messages.length, 0)
let msg2 = server1.createMessage("destination@betrybe.com", "HAHAHA", "hehehe")
assert.ok(msg2 instanceof EmailMessage)
assert.equal(msg2.from, undefined)
assert.equal(msg2.to, "destination@betrybe.com")
assert.equal(msg2.subject, "HAHAHA")
assert.equal(msg2.content, "hehehe")
assert.equal(server1.sent_messages.length, 0)
msg2 = server1.sendMessage(msg2)
assert.ok(msg2 instanceof EmailMessage)
assert.equal(msg2.from, "my-email@betrybe.com")
assert.equal(msg2.to, "destination@betrybe.com")
assert.equal(msg2.subject, "HAHAHA")
assert.equal(msg2.content, "hehehe")
assert.equal(server1.sent_messages.length, 1)
