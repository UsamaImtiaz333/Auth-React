import axios from "axios";

import type { LoginFormData } from "@/validations/SchemaForms/AuthFormSchema/LoginSchema";

const BASE_URL = "http://localhost:3000"

export const LoginFormApi = async (data: LoginFormData)=>{
    const response = await axios.post(`${BASE_URL}/user/login`, data)
    return response.data;
    
}