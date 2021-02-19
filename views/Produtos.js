import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import Styles from '../assets/styles/Styles';

export default function Produtos(props) {
  const data = [
    {
      id: 1,
      Title: 'Cerveja Unicorn IPA 473ml',
      Price: 'R$20,90',
      imagens: require('../assets/img/produtos/Cerveja-Unicorn-IPA-Lata-473ml.jpg'),
    },
    {
      id: 2,
      Title: 'Cerveja Unicorn Premium Lager Lata 350ml',
      Price: 'R$8,90',
      imagens: require('../assets/img/produtos/Cerveja-Unicorn-Premium-Lager-Lata-350ml.jpg'),
    },
    {
      id: 3,
      Title: 'Cerveja Unicorn Witbier Lata 473ml',
      Price: 'R$15,90',
      imagens: require('../assets/img/produtos/Cerveja-Unicorn-Witbier-Lata-473ml.jpg'),
    },
    {
      id: 4,
      Title: 'Cerveja Bodeborwn Tripel Montfort Garrafa 750ml',
      Price: 'R$120,00',
      imagens: require('../assets/img/produtos/Cerveja-Bodeborwn-Tripel-Montfort-Garrafa-750ml.jpg')
    },
    {
      id: 5,
      Title: 'Cerveja Everbrew DoubleBlend Juice Double IPA Lata 475ml',
      Price: 'R$45,99',
      imagens: require('../assets/img/produtos/Cerveja-Everbrew-DoubleBlend-Juice-Double-IPA-Lata-475ml.jpg')
    },
    {
      id: 6,
      Title: 'Cerveja Chimay Triple Garrafa 330ml',
      Price: 'R$41,00',
      imagens: require('../assets/img/produtos/Cerveja-Chimay-Triple-Garrafa-330ml.jpg')
    }

  ]
  return (
    <View style={Styles.ContainerProduto}>
      <FlatList
        style={Styles.ListaProdutos}
        data={data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <View style={Styles.CardContainer}>
            <View style={Styles.CardView}>
              <Image style={Styles.ImgProduto} source={item.imagens} />
              <View style={Styles.CardBody}>
                <Text style={Styles.Title}>{item.Title}</Text>
                <Text style={Styles.Price}>{item.Price}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>

  );
};