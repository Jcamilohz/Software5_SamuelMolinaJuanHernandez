import tw from 'twrnc';

const styles = {
  container: tw`flex-1 justify-center items-center bg-lime-200`,
  title: tw`text-2xl font-bold text-black`,
  text: tw`text-lg text-gray-700`,
  mainBackground: tw`bg-white h-full`,

  header: tw`bg-lime-400 w-full h-15 flex-row items-center px-4`,
  headerIcon: tw`w-12 h-20 mr-4`, 
  inputContainer: tw`flex-row items-center h-10 w-70 bg-white border border-gray-700 rounded-lg px-3`,
  headerSearchIcon: tw`w-4 h-4 mr-2`, 
  headerTextInput: tw`flex-1 text-black`, 
  headerTextInputPlaceholder: tw.color('text-slate-400'),
  headerFilterIcon: tw`w-15 h-7`, 

  header2: tw`bg-lime-100 w-full h-8 flex-row items-center px-4`,
  
  opcions: tw`flex-col justify-between items-center px-4  w-100% h-80%`,
  
};

export default styles;
