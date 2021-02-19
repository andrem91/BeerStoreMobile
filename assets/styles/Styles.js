import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  darkbg: {
    backgroundColor: '#333'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30
  },
  icon: {
    padding: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#000'
  },
  iconImage: {
    width: 120,
    height: 120,
  },
  iconText: {
    textAlign: 'center',
    fontSize: 26,
    marginTop: 4,
    fontWeight: 'bold'
  },
  home__container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  login__form: {
    width: '80%'
  },
  login__input: {
    backgroundColor: '#fff',
    fontSize: 19,
    padding: 7,
    marginBottom: 15
  },
  login__button: {
    padding: 12,
    backgroundColor: '#006600',
    alignSelf: 'center',
    borderRadius: 5
  },
  login_buttonText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff'
  },
  ContainerProduto: {
    flex: 1,
    // backgroundColor: '#fff',
    height: '100%'
  },
  CardContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
  },
  CardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '94%',
    minHeight: 200
  },
  ImgProduto: {
    width: 180,
    height: 180
  },
  CardBody: {
    flex: 1,
  },
  Title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    margin: 5
  },
  Price: {
    color: "#e73931",
    fontWeight: "bold",
    fontSize: 16,
    margin: 5
  },
  ListaProdutos: {
    minHeight: '90%',
    maxHeight: '90%',
    backgroundColor: '#ffffff'
  }
});

export default Styles;