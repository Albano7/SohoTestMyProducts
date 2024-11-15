type NameType = {
  firstname: string;
  lastname: string;
}

type GeolocationType = {
  lat: string;
  long: string;
}

type AddresType = {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: GeolocationType;
}

interface UserType {
  id: number;
  email: string;
  username: string;
  password: string;
  name: NameType;
  address: AddresType;
  phone: string;
}

type UserSimpleType = {
  id: UserType.id,
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userName: string;
}

type LoginType = { 
  username: string, 
  password: string 
}