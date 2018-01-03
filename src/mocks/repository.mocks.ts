import { Repository} from '../models/repository.interface';
import {USER_LIST} from './user.mocks';
const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 camera',
        description: 'this repository shows the usage of the camera functionality within Ionic 3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 sms',
        description: 'this repository shows the usage of the sms functionality within Ionic 3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 Geolocation',
        description: 'this repository shows the usage of the geolocation functionality within Ionic 3',
        owner: USER_LIST[1]
    },
    {
        name: 'Ionic 3 maps',
        description: 'this repository shows the usage of the maps functionality within Ionic 3',
        owner: USER_LIST[1]
    },
    
];

export const REPOSITORY_LIST = repositoryList;