
import { handleLogin, handleSignUp } from "../../src/Screens/Auth/handlers";
import { login, logout, signUp } from "../../src/utils";


const supabase = {
  auth: {
    signUp: jest.fn().mockImplementation(({ email, password }) => {
      if (email === 'test@example.com' && password === 'password') {
        // Simulación de sign up exitoso
        return { error: null, data: { userId: '123' } };
      } else {
        // Simulación de error en sign up
        return { error: new Error('Sign up failed.'), data: null };
      }
    }),

    signInWithPassword: jest.fn().mockImplementation(({ email, password }) => {
      if (email === 'test@example.com' && password === 'password') {
        // Simulación de sign up exitoso
        return { error: null, data: { userId: '123' } };
      } else {
        // Simulación de error en sign up
        return { error: new Error('Login failed.'), data: null };
      }
    }),
    signOut: jest.fn().mockImplementation(() => {

      // Simulación de sign up exitoso
      return { error: null, };
    }
    ),

  },
};

describe('signUp', () => {
  it('should return an object with "ok" set to true when valid credentials are provided', async () => {
    const credentials = { email: 'test@example.com', password: 'password' };
    const result = await signUp({ credentials, supabase });

    expect(result.ok).toBe(true);
  });

  it('should return an object with "ok" set to false and a message when email is missing in the credentials', async () => {
    const credentials = { password: 'password' };
    const result = await signUp({ credentials, supabase });

    expect(result.ok).toBe(false);
    expect(result.message).toBe('Email is required.');
  });

  it('should return an object with "ok" set to false and a message when there is an error during sign up', async () => {
    const credentials = { email: 'test@example.com', password: 'password' };

    // Mocking an error response from supabase.auth.signUp
    supabase.auth.signUp = jest.fn().mockResolvedValue({ error: true });

    const result = await signUp({ credentials, supabase });

    expect(result.ok).toBe(false);
    expect(result.message).toBe('signup error.');
  });

  it('should return an object with "ok" set to true and data when sign up is successful', async () => {
    const credentials = { email: 'test@example.com', password: 'password' };
    const signUpResponse = { data: { userId: '123' } };

    // Mocking a successful response from supabase.auth.signUp
    supabase.auth.signUp = jest.fn().mockResolvedValue(signUpResponse);

    const result = await signUp({ credentials, supabase });

    expect(result.ok).toBe(true);
    expect(result.message).toBe('ok');
    expect(result.data).toBe(signUpResponse.data);
  });
});


describe('login', () => {
  it('should return an object with "ok" set to true when valid credentials are provided', async () => {
    const credentials = { email: 'test@example.com', password: 'password' };


    const result = await login({ credentials, supabase });

    expect(result.ok).toBe(true);
  });
  it('should return an object with "ok" set to true when valid credentials are provided', async () => {
    const credentials = { password: 'password' };


    const result = await login({ credentials, supabase });

    expect(result.ok).toBe(false);
  });


});







describe('handleSignUp', () => {
  it('should set loading to true and call signUp with the provided credentials', () => {
    const setLoading = jest.fn();
    const credentials = { email: 'test@example.com', password: 'password' };
    // const supabase = {}; // Mock supabase object

    handleSignUp({ credentials, supabase, setLoading });

    expect(setLoading).toHaveBeenCalledTimes(2);
    expect(setLoading).toHaveBeenCalledWith(true);
    expect(setLoading).toHaveBeenCalledWith(false);
    expect(supabase.auth.signUp).toHaveBeenCalledWith(credentials);
  });
});


describe('handleLogin', () => {
  it('should set loading to true and call login with the provided credentials', () => {
    const setLoading = jest.fn();
    const credentials = { email: 'test@example.com', password: 'password' };
    // const supabase = {}; // Mock supabase object

    handleLogin({ credentials, supabase, setLoading });

    expect(setLoading).toHaveBeenCalledTimes(2);
    expect(setLoading).toHaveBeenCalledWith(true);
    expect(setLoading).toHaveBeenCalledWith(false);
    expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith(credentials);
  });
});

describe('logout', () => {

  it('shoul return ok: true', async () => {
    const navigation = { navigate: jest.fn() };

    const result = await logout({ navigation, supabase })
    expect(result.ok).toBeTruthy()
  })



})