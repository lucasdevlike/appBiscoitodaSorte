import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';

function App() {

  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    '"Siga os bons e aprenda com eles."',
    '"O bom senso vale mais do que muito conhecimento."',
    '"O riso é a menor distância entre duas pessoas."',
    '"Deixe de lado as preocupações e seja feliz."',
    '"Realize o óbvio, pense no impossível e conquiste o impossível."',
    '"Acredite em milagres, mas não dependa deles."',
    '"A maior barreira para o sucesso é o medo do fracasso."',
    '"O impossível é só questão de opinião"',
    '“Somos o que fazemos repetidamente. Excelência não é um ato, mas sim um hábito.” ',
    '“Se você não consegue tolerar críticas de jeito algum, então não faça nada novo ou interessante.”',
    '“Trabalhe até que seus rivais se tornem ídolos.”',
    '“O sucesso é um péssimo professor. Ele leva pessoas inteligentes a pensarem que não podem perder.”',
    '“Você não é pago pela hora. Você é pago pelo valor que traz para a hora. ”',
    '“Objetivo é um sonho com prazo de entrega.”',
    '“O maior risco é não assumir nenhum risco. Em um mundo que muda rapidamente, a única estratégia garantida a falhar é não assumir riscos.”',
    '“O sucesso nem sempre tem a ver com grandeza. É uma questão de consistência. O trabalho árduo consistente leva ao sucesso. A grandeza virá. ”',
    '“Eu acredito que você precisa seguir os seus sonhos. Foi o que eu fiz.”',
    '“Eu aprendi com o meu pai que mudança e experimentação são constantes e importantes. Você precisa continuar tentando coisas novas.”',
    '“Eu não vim para este mundo para trabalhar. Eu vim para aproveitar a minha vida. Eu não quero morrer no meu escritório. Eu quero morrer na praia.”',
    '“Só adie para amanhã o que você estiver disposto a morrer deixando inacabado.”',
    '“Pense grande, mire alto, trabalhe duro e nunca desista.”',
    '“Ser líder é alcançar resultados com o time certo, da maneira correta.”',
    '“As dificuldades fortalecem a mente da mesma forma que o trabalho faz com o corpo.”',
    '“Melhorar a si mesmo é muito mais lucrativo do que tentar melhorar os outros.”',
    '“O sucesso não é determinado por quantas vezes você ganha, mas por como você joga na semana após a derrota.”',
    '“De longe, o melhor prêmio que a vida tem a oferecer é a chance de trabalhar duro em algo que valha a pena.”',
    '“Apenas acredite em si mesmo. Se não, finja que sim e, em algum momento, vai ser verdade.”',
    '“A única jornada impossível é aquela que você nunca começa.”',
    '“Comece onde está. Use o que tem. Faça o que pode.”',
    '“Caia para a frente. Cada experimento com falhas é um passo mais perto do sucesso. Você tem que correr riscos.”',
    '“Para realizar grandes coisas, devemos não apenas agir, mas também sonhar, não apenas planejar, mas também acreditar.”'
  ];

  function quebraBiscoito() {

    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase(frases[numeroAleatorio]);
    setImg(require('./src/biscoitoAberto.png'));

  }

  function reiniciar() {
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return (
    <View style={styles.container}>

      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}> {textoFrase} </Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]} onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;

