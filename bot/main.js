import prompts from 'newbot-prompts'
import code from './main.converse'
import { notification } from './functions/notification'

export default {
    code,
    skills: {
        prompts
    },
    functions: {
        notification
    }
}