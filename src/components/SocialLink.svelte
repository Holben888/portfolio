<p style="--color: {color}">
	<a href="{link}"><span class="text">{text}</span><span class="icon">{icon}</span></a>
</p>

<style>
  p {
    --color: #000;
  }
  span.text {
    margin-right: 1rem;
    font-weight: 600;
    text-decoration-line: underline;
    text-decoration-color: var(--color);
  }
  a {
    color: var(--color);
    padding: 0.4rem 0.8rem;
    position: relative;
    border-radius: 0.5rem;
  }
  a::before {
    content: "";
    background-color: var(--color);
    border-radius: 0.5rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    transition: all 0.1s ease-out;
    z-index: -1;
  }
  a:hover {
    color: var(--grey-1);
  }
  a:hover::before {
    width: 100%;
  }
  .icon {
    display: inline-block;
  }
  a:hover .icon {
    transform: rotate(20deg) scale(1.2);
    transition: all 0.2s ease-out;
  }
</style>

<script>
  export default {
    data: () => ({
      link: "",
      text: "",
      color: "#000"
    })
  };
</script>