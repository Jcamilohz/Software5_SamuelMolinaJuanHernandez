
import tw from 'twrnc';

const styles = {

  title: tw`text-2xl font-bold text-black`,
  container: tw`flex-1 justify-center items-center bg-lime-200`,
  container2: tw`flex-1  items-center bg-lime-200`,
  container3: tw`justify-end items-center bg-lime-200`,
  container4: tw`flex-1 bg-lime-200`,
  container5: tw`flex-1 justify-center items-center p-4`,
  container6: tw`flex-1 justify-center items-center p-4 border-4 border-green-300`,
  text: tw`text-lg text-gray-700`,
  mainBackground: tw`bg-white h-full`,
  containerButton: tw`justify-center items-center w-100% h-10 my-5`,
  button: tw`bg-gray-300 px-4 py-2 rounded w-70% justify-center items-center`,
  buttonGreen: tw`bg-lime-500 px-4 py-2 rounded w-70% justify-center items-center`,
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
  header2: tw`bg-green-100 w-full h-8 flex-row items-center px-4 justify-between`,
  opcions: tw`flex-col justify-between items-center px-4 `,
  optionButton: tw`bg-lime-400 p-4 rounded-lg mb-4 w-80 shadow-lg`, 
  optionButtonText: tw`text-lg text-black font-bold text-center`, 
  opcions: tw`w-full items-center`, 
  filterContainer: tw`w-80 h-40 bg-white rounded-lg justify-center items-center`,
  modalBackground: tw`flex-1 justify-center items-center bg-black bg-opacity-20`,
  modalContainer: tw`w-90% h-90% bg-white p-4 rounded-lg items-center border border-gray-700`,
  productList: tw`p-4 border border-gray-700 rounded-lg bg-white`,
  productItem: tw`mb-4 text-lg text-blue-500 border border-gray-700`,
  productDetails: tw`p-4`,
  searchResults: tw`p-4`,

  productCard: tw`bg-white border border-gray-300 rounded-lg mb-4 flex-row items-center`,
  productImage: tw`w-30 h-27 mr-2`,
  productInfo: tw`flex-1`,
  image: tw`w-80 h-60 border border-gray-300 flex-1 rounded-lg mb-4 m-2`,
  beforePrice: tw`text-sm text-gray-500 line-through`,
  section: tw`mb-1 p-4`,
  sectionHeader: tw`flex-row justify-between items-center mb-2`,
  title: tw`text-lg font-bold text-black`,
  productInfo2: tw`flex-1 border border-gray-200 rounded-lg p-4 m-2 mt-0`,
  icon: tw`w-5 h-5`,
  icon2: tw`w-12 h-20 mr-4 border boder-gray-400`,


  commentContainer: tw`mb-4 p-3 bg-gray-100 rounded-lg`,
  commentUser: tw`font-bold text-lg mb-1`,
  commentText: tw`text-base text-gray-700`,
  commentScore: tw`text-sm text-gray-500 mt-1`,
  noCommentsText: tw`text-center text-gray-500 text-base`,

  input: tw`w-full p-2 bg-white border border-gray-300 rounded-lg mb-4 text-black`,

  productContainer: tw`relative mb-4`, 
  removeButton: tw`absolute top-0 right-0 p-2 bg-red-500 rounded-full z-10`, 
  removeButtonText: tw`text-white font-bold`, 




  quantityContainer: tw`flex-row items-center justify-center`,
  
  quantityButton: tw`w-10 h-10 justify-center items-center bg-white rounded-lg mx-2`,





  sectionTitle: tw`text-lg font-bold`,
  viewMore: tw`text-green-600`,

  productContainer: tw`border-b border-gray-300 py-4`,
  productName: tw`text-xl font-bold text-black`,







































///
sesionMainBackground: tw`flex-1 bg-white justify-center items-center`,
  sesionLogoContainer: tw`mb-10`, 
  sesionLogo: tw`w-50 h-50`,  
  sesionInstructionText: tw`text-lg mb-5 text-black text-center`,
  sesionInputWrapper: tw`w-4/5 mb-5`,
  sesionLabel: tw`text-base text-black mb-2 ml-2`,
  sesionInput: tw`h-10 border border-gray-300 rounded-lg mb-4 px-3 bg-white text-black`,
  sesionButton: tw`bg-lime-500 px-4 py-2 rounded w-70% justify-center items-center`,
  sesionButtonText: tw`text-white text-lg text-center`,
  sesionTextLink: tw`text-green-500 text-center mt-2`,

  
registerMainBackground: tw`flex-1 bg-white justify-center items-center pt-10`, 
registerScrollView: tw`flex-grow`, 
registerLogoContainer: tw`mb-8`,  
registerLogo: tw`w-50 h-50`,  
registerInstructionText: tw`text-lg mb-4 text-black text-center`,  
registerInputWrapper: tw`w-full px-10 mb-4`,  
registerLabel: tw`text-base text-black mb-2 ml-2`,  
registerInput: tw`h-12 border border-gray-300 rounded-lg mb-3 px-4 bg-white text-black w-full`,
registerButton: tw`bg-lime-500 px-4 py-2 rounded w-70% justify-center items-center mt-4 mb-10`,  
registerButtonText: tw`text-white text-lg text-center`, 


helpMainBackground: tw`flex-1 bg-white p-4`,
helpScrollView: tw`flex-grow`,
helpTitle: tw`text-2xl font-bold text-black mb-4`,
helpSection: tw`mb-6`,
helpSectionTitle: tw`text-lg font-bold text-black mb-2`,
helpTextInput: tw`bg-white border border-gray-300 rounded-lg p-4 text-black h-32`,
helpButton: tw`bg-lime-500 px-4 py-2 rounded w-full justify-center items-center`,
helpButtonText: tw`text-white text-lg text-center`,
helpOptionContainer: tw`p-4 bg-white rounded-lg shadow mb-4`,
helpOptionText: tw`text-lg font-bold text-black`,
helpOptionDescription: tw`text-sm text-gray-600`,
helpContactContainer: tw`mt-8 p-4 bg-white rounded-lg shadow`,
helpContactText: tw`text-lg font-bold text-black text-center`,
helpContactLink: tw`text-sm text-blue-500 text-center`,

profileMainBackground: tw`flex-1 bg-white`,
profileScrollView: tw`flex-grow justify-center items-center p-6`, 
profileContainer: tw`justify-center items-center w-full`, 
profileTitle: tw`text-2xl font-bold text-black mb-6 text-center`, 
profileImage: tw`w-40 h-40 rounded-full mb-6 border-4 border-gray-300`,
profileLabel: tw`text-lg font-bold text-gray-700 mb-1 text-center`, 
profileText: tw`text-lg text-black mb-4 text-center`,
profileButton: tw`bg-lime-500 px-4 py-2 rounded mt-6 w-3/4`, 
profileButtonText: tw`text-white text-lg text-center`,















//
};

export default styles;
