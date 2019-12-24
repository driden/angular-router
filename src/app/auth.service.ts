export class AuthService {
  loggedIn = false;

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isAuthenticated(): Promise<boolean> {
    const p = new Promise<boolean>(resolve => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return p;
  }
}
