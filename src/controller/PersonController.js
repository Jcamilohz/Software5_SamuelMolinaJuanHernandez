import personData from '../data/PersonData';

export const getPersonById = (personId) => {
  return personData.find(person => person.id === personId);
};
