import tw from 'twrnc';

const styles = {
  title: tw`text-lg font-bold text-black`,
  container: tw`justify-end items-center bg-lime-200`,
  container2: tw`flex-1 bg-lime-200`,
  container3: tw`flex-1 justify-center items-center p-4 border-4 border-green-300`,
  text: tw`text-lg text-gray-700`,
  mainBackground: tw`bg-white h-full`,
  containerButton: tw`justify-center items-center w-100% h-10 my-5`,
  button: tw`bg-gray-300 px-4 py-2 rounded w-70% justify-center items-center`,
  buttonGreen: tw`bg-lime-500 px-4 py-2 rounded w-70% justify-center items-center`,
  textGreen: tw`text-green-500`,
  textRed: tw`text-red-500`,
  textSmall: tw`text-sm text-gray-500`,
  textWhite: tw`text-white text-lg font-bold text-center`,
  header: tw`bg-lime-400 w-full h-15 flex-row items-center px-4`,
  headerIcon: tw`w-12 h-20 mr-4`,
  inputContainer: tw`flex-1 flex-row items-center h-10 bg-white border border-gray-700 rounded-lg px-3`,
  headerSearchIcon: tw`w-4 h-4 mr-2`,
  headerTextInput: tw`flex-1 text-black`,
  headerTextInputPlaceholder: tw.color('text-slate-400'),
  headerFilterIcon: tw`w-15 h-7`,
  header2: tw`bg-lime-400 w-full h-8 flex-row items-center px-4 justify-between`,
  optionButton: tw`bg-lime-400 p-4 rounded-lg mb-4 w-80 shadow-lg`,
  opcions: tw`w-full items-center`,
  filterContainer: tw`w-80 h-40 bg-white rounded-lg justify-center items-center`,
  modalBackground: tw`flex-1 justify-center items-center bg-black bg-opacity-20`,
  modalContainer: tw`w-90% h-90% bg-white p-4 rounded-lg items-center border border-gray-700`,
  productList: tw`p-4 border border-gray-700 rounded-lg bg-white`,
  productItem: tw`mb-4 text-lg text-blue-500 border border-gray-700`,
  padding: tw`p-4`,
  productCard: tw`bg-white border border-gray-300 rounded-lg mb-4 flex-row items-center`,
  productImage: tw`w-30 h-27 mr-2`,
  productInfo: tw`flex-1`,
  image: tw`w-80 h-60 border border-gray-300 flex-1 rounded-lg mb-4 m-2`,
  section: tw`mb-1 p-4`,
  sectionHeader: tw`flex-row justify-between items-center mb-2`,
  productInfo2: tw`flex-1 border border-gray-200 rounded-lg p-4 m-2 mt-0`,
  icon: tw`w-5 h-5`,
  icon2: tw`w-12 h-20 mr-4 border`,
  commentContainer: tw`mb-4 p-3 bg-gray-100 rounded-lg`,
  commentUser: tw`font-bold text-lg mb-1`,
  commentText: tw`text-base text-gray-700`,
  commentScore: tw`text-sm text-gray-500 mt-1`,
  noCommentsText: tw`text-center text-gray-500 text-base`,
  input: tw`w-full p-2 bg-white border border-gray-300 rounded-lg mb-4 text-black`,
  removeButton: tw`absolute top-0 right-0 p-2 bg-red-500 rounded-full z-10`,
  removeButtonText: tw`text-white font-bold`,
  quantityContainer: tw`flex-row items-center justify-center`,
  quantityButton: tw`w-10 h-10 justify-center items-center bg-white rounded-lg mx-2`,
  commentHeader: tw`flex-row items-center mb-2`,
  profileImage: tw`w-10 h-10 rounded-full mb-4`,
  profileImage2: tw`w-100 h-100 rounded-full mb-4`,
  dateText: tw`text-sm text-gray-500 mt-2`,
  sectionTitle: tw`text-lg font-bold`,
  productContainer: tw`border-b border-gray-300 py-4`,
  productName: tw`text-xl font-bold text-black`,
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
  scrollView: tw`flex-grow`,
  registerLogoContainer: tw`mb-8`,
  registerLogo: tw`w-50 h-50`,
  registerInstructionText: tw`text-lg mb-4 text-black text-center`,
  registerInputWrapper: tw`w-full px-10 mb-4`,
  registerLabel: tw`text-base text-black mb-2 ml-2`,
  registerInput: tw`h-12 border border-gray-300 rounded-lg mb-3 px-4 bg-white text-black w-full`,
  registerButton: tw`bg-lime-500 px-4 py-2 rounded w-70% justify-center items-center mt-4 mb-10`,
  registerButtonText: tw`text-white text-lg text-center`,
  helpMainBackground: tw`flex-1 bg-white p-4`,
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
  profileScrollView: tw`flex-grow justify-start items-center p-6`,
  profileBox: tw`w-full bg-gray-100 p-3 mb-3 border border-gray-300 rounded-lg`,
  productListContainer1: tw`p-4 bg-gray-100`,
  productCardContainer1: tw`bg-white p-4 mb-4 border border-gray-300 rounded-lg`,
  productImage1: tw`w-full h-40 mb-4`,
  productInfoContainer1: tw`mb-4`,
  productName1: tw`text-xl font-bold text-black mb-2`,
  productStock1: tw`text-sm text-gray-500`,
  stepsContainer1: tw`flex-row justify-between items-center mt-4`,
  stepWrapper1: tw`flex-col items-center flex-1`,
  stepCircle1: tw`w-8 h-8 border-2 border-gray-300 rounded-full bg-white mb-2`,
  stepCircleActive1: tw`border-lime-500 bg-lime-500`,
  stepLabel1: tw`text-xs text-gray-500 text-center h-10`,
  stepLabelActive1: tw`text-lime-500 font-bold h-10`,
  formContainer1: tw`p-4 bg-white flex-1`,
  inputField1: tw`border border-gray-300 rounded-lg p-2 mb-4 text-black`,
  imagePicker1: tw`bg-lime-500 px-4 py-2 rounded-lg mb-4 w-full items-center`,
  selectedImage1: tw`w-full h-40 mb-4`,
  noProductsText1: tw`text-lg text-gray-500 text-center mt-10`,
  fullContainer: tw`flex-1 p-4 bg-gray-100`,
  headerTitle1: tw`text-3xl font-bold text-black mb-6`,
  label1: tw`text-lg font-bold text-gray-700 mb-2`,
  input1: tw`bg-white border border-gray-300 rounded-lg mb-4 px-4 py-2 text-black`,
  descriptionInput1: tw`bg-white border border-gray-300 rounded-lg mb-4 px-4 py-2 text-black h-24`,
  actionButton1: tw`bg-lime-500 px-4 py-3 rounded-lg w-full items-center mt-4`,
  buttonText1: tw`text-white text-lg text-center`,
  containerPadding: tw`p-4`,
  modalBackgroundmfp: tw`flex-1 justify-center items-center bg-black bg-opacity-50`,
  modalContainermfp: tw`bg-white p-6 rounded-lg w-11/12 max-w-md shadow-lg`,
  modalTitlemfp: tw`text-2xl font-bold text-black mb-4 text-center`,
  modalInputmfp: tw`bg-gray-100 border border-gray-300 rounded-lg mb-4 px-4 py-2 text-black`,
  modalButtonmfp: tw`bg-lime-500 px-4 py-3 rounded-lg w-full items-center mt-4`,
  modalButtonTextmfp: tw`text-white text-lg text-center`,
  modalCloseButtonmfp: tw`absolute top-2 right-2 p-2 bg-red-500 rounded-full`,
  modalCloseButtonTextmfp: tw`text-white text-lg text-center`,
  modalDescriptionTextmfp: tw`text-lg text-gray-600 text-center mb-4`,
  picker: tw`text-black`,
  filterOption: tw`flex-row justify-start items-center mb-2`,
  filterOptionText: tw`text-lg text-black`,
  label: tw`text-base font-bold text-gray-600 mb-2`,
  addButton: tw`bg-lime-500 px-4 py-3 rounded-lg w-full items-center mt-4`,
  addButtonText: tw`text-white text-lg text-center`,
  text2: tw`text-sm text-gray-500`,
  text2Line: tw`text-sm text-gray-500 line-through`,
  buttonContainer1: tw`flex-row justify-between mt-4`,
  modalButtonmfp1: tw`bg-lime-500 px-4 py-3 rounded-lg w-5/12 items-center`,
  modalResetButtonmfp1: tw`bg-red-500 px-4 py-3 rounded-lg w-5/12 items-center`,
  modalButtonTextmfp1: tw`text-white text-lg text-center`,
  modalResetButtonTextmfp1: tw`text-white text-lg text-center`,
  sectionHeaderPdS: tw`items-center justify-center mb-4`,
  imagePdS: tw`w-full h-60 border border-gray-300 rounded-lg mb-4`,
  iconPdS: tw`w-6 h-6 self-end`,
  productInfoPdS: tw`border border-gray-200 rounded-lg p-4 mt-2`,
  textGreenPdS: tw`text-green-500`,
  textRedPdS: tw`text-red-500`,
  textSmallPdS: tw`text-sm text-gray-500`,
  buttonGreenPdS: tw`bg-lime-500 px-6 py-3 rounded-lg w-full items-center`,
  containerButtonPdS: tw`justify-center items-center w-full my-3`,
  titlePdS: tw`text-lg font-bold text-black mb-4 text-center`,
  sectionTitlePdS: tw`text-lg font-bold text-black mb-4`,
  textPdS: tw`text-base text-black mb-2 text-center`,
  buttonPdS: tw`bg-gray-300 px-6 py-3 rounded-lg w-80 justify-center items-center self-center`,
  buttonTextPdS: tw`text-black text-base text-center`,
  commentTextPdS: tw`text-base text-gray-700`,
  commentScorePdS: tw`text-sm text-gray-500 mt-1`,
  commentContainerPdS: tw`mb-4 p-3 bg-gray-100 rounded-lg`,
  relatedProductCard: tw`mr-4 w-40 bg-gray-100 rounded-lg p-2 items-center`,
  relatedProductImage: tw`w-full h-24 mb-2`,
  relatedProductText: tw`text-sm font-bold mb-1 text-center text-black`,
  relatedProductPrice: tw`text-green-500 text-center`,
  noRelatedProductsText: tw`text-gray-500 text-center`,
  pickerWrapper: tw`mb-4 border border-gray-200 rounded-lg overflow-hidden`,
  picker1: tw`bg-white h-12 text-black`,
  pickerLabel: tw`text-lg text-black`,
  profileContainer: tw`w-full px-6 mt-6`,
  profileInputPf: tw`w-full p-4 mb-5 bg-white border border-gray-300 rounded-lg text-black`,
  profileLabelPf: tw`text-lg text-gray-700 mb-3 self-start`,
  profileButtonPf: tw`bg-lime-500 px-8 py-4 rounded-full mt-8 w-full`,
  profileButtonTextPf: tw`text-white text-lg font-bold text-center`,
  pickerWrapper2: tw`w-full bg-white border border-gray-300 rounded-lg mb-5`,
  picker2: tw`w-full p-4 text-black`,
};

export default styles;
