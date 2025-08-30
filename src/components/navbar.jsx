function Navbar() {
  return (
    <>
      <nav>
        <HomeLink />
        <AboutLink />
        <CourseLink />
        <BlogLink />
        <LoginLink />
      </nav>
    </>
  );
}

function HomeLink() {
  return (
    <>
      <a href="">Home</a>
    </>
  );
}
function AboutLink() {
  return (
    <>
      <a href="">About</a>
    </>
  );
}

function CourseLink() {
  return (
    <>
      <a href="">Course</a>
    </>
  );
}
function BlogLink() {
  return (
    <>
      <a href="">Blogs</a>
    </>
  );
}

export function LoginLink() {
  return (
    <>
      <a href="">login</a>
    </>
  );
}

export default Navbar;
