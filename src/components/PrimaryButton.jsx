import styles from './PrimaryButton.module.css';

function composeClass(base, extra) {
  return extra ? `${base} ${extra}` : base;
}

export default function PrimaryButton({ children, href, type = 'button', className = '', ...props }) {
  const combined = composeClass(styles.button, className);

  if (href) {
    return (
      <a className={combined} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combined} {...props}>
      {children}
    </button>
  );
}
