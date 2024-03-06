import { loginGoogle, loginGithub, loginGitlab, loginSpotify } from "@/lib/actions"

function OAuthForm() {

  return (
    <>
      <form className='oauth'>
        <button formAction={loginGoogle} className="social-button bg-red-500">
          <img src="/google.svg" alt="Google" />  Iniciar sesión con Google
        </button>

        <button formAction={loginGithub} className="social-button bg-blue-500">
          <img src="/github.svg" alt="Github" /> Iniciar sesión con Github
        </button>

        <button formAction={loginGitlab} className="social-button bg-purple-500">
          <img src="/gitlab.svg" alt="Gitlab" /> Iniciar sesión con Gitlab
        </button>

        <button formAction={loginSpotify} className="social-button bg-green-500">
          <img src="/spotify.svg" alt="Spotify" /> Iniciar sesión con Spotify
        </button>

      </form>

    </>
  )
}

export default OAuthForm;