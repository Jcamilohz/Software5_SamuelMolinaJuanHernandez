import { Image } from 'react-native';
import tw from 'twrnc';

const styles = {
  container: tw`flex-1 justify-center items-center bg-lime-200`,
  title: tw`text-2xl font-bold text-black`,
  text: tw`text-lg text-gray-700`,
  mainBackground: tw`bg-white h-full`,
  button: tw`bg-lime-500 px-4 py-2 rounded w-70% justify-center items-center`,
  textGreen: tw`text-green-500`,
  textRed: tw`text-red-500`,
  textSmall: tw`text-sm text-gray-500`,

  
  header: tw`bg-lime-400 w-full h-15 flex-row items-center px-4`,
  headerIcon: tw`w-12 h-20 mr-4`, 
  inputContainer: tw`flex-1 flex-row items-center h-10 bg-white border border-gray-700 rounded-lg px-3`,
  headerSearchIcon: tw`w-4 h-4 mr-2`, 
  headerTextInput: tw`flex-1 text-black`, 
  headerTextInputPlaceholder: tw.color('text-slate-400'),
  headerFilterIcon: tw`w-15 h-7`, 

  header2: tw`bg-lime-100 w-full h-8 flex-row items-center px-4 justify-between`,
  
  opcions: tw`flex-col justify-between items-center px-4  w-100% h-80%`,
  
  container2: tw`flex-1 bg-white`,
  filterContainer: tw`w-80 h-40 bg-white rounded-lg justify-center items-center`,

  modalBackground: tw`flex-1 justify-center items-center bg-opacity-0`,
  modalContainer: tw`w-80 h-40 bg-white rounded-lg justify-center items-center border border-gray-700`,
  productList: tw`p-4 border border-gray-700 rounded-lg bg-white`,
  productItem: tw`mb-4 text-lg text-blue-500 border border-gray-700`,
  productDetails: tw`p-4`,
  searchResults: tw`p-4`,

//
  productCard: tw`bg-white border border-gray-300 rounded-lg mb-4 flex-row items-center`,

  productImage: tw`w-30 h-27 mr-2`,
  productInfo: tw`flex-1`,
  image: tw`w-80 h-60`,
 





  beforePrice: tw`text-sm text-gray-500 line-through`,



  section: tw`mb-1 p-4`,
  sectionHeader: tw`flex-row justify-between items-center mb-2`,
  sectionTitle: tw`text-lg font-bold`,
  viewMore: tw`text-green-600`,
};

export default styles;
