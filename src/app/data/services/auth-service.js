const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL

export async function registerUserService(RegisterUserProps) {
  const url = new URL("/api/auth/local/register", baseUrl);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...RegisterUserProps }),
      cache: "no-cache",
    })

    return response.json();
  } catch (error) {
    console.error("Registration Service Error:", error);
  }
}

export async function loginUserService(LoginUserProps) {
  const url = new URL("/api/auth/local", baseUrl);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...LoginUserProps }),
      cache: "no-cache",
    })

    return response.json();
  } catch (error) {
    console.error("Login Service Error:", error);
    throw error;
  }
}

export async function confirmNewRequestService(confirmNewRequestProps) {
  const url = new URL("/api/auth/send-email-confirmation", baseUrl)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...confirmNewRequestProps }),
      cache: 'no-cache',
    })

    return response.json();
  } catch (error) {
    console.error("New request confirmation Service Error:", error);
    throw error;
  }
}

export async function passwordRequestService(passwordRequestProps) {
  const url = new URL('/api/auth/forgot-password', baseUrl)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...passwordRequestProps }),
      cache: 'no-cache',
    })

    return response.json();
  } catch (error) {
    console.error("Password request Service Error:", error);
    throw error;
  }
}