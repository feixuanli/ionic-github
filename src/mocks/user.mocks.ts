import{User} from '../models/user.interface';
const userList: User[] = [{
    name:'john smith',
    company: 'BCD',
    location: 'durham, uk',
    bio:'i make videos on my fav techs. go angular!',
    avatar_url: 'https://avatars0.githubusercontent.com/u/20669641?s=460&v=4',
    email: 'jon@doe.com'
},{
    name:'paul allen',
    company: 'SW',
    location: 'california, us',
    bio:'i love yahoo',
    avatar_url: 'http://i/imgur.com/jav62p6.jpg',
    email: 'payl@dfa.com'

}];
export const USER_LIST = userList;