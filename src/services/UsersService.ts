import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"


class UsersService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);
        
        //verificar se o usuário existe

        const userExist = await usersRepository.findOne({
            email
        });
        //se existir, retornar user
        if(userExist) {
            return userExist;
        }
        //se não existir, salvar no DB
        const user = usersRepository.create({
            email,
        });
        await usersRepository.save(user);
        return user;
        
    }

}

export { UsersService }