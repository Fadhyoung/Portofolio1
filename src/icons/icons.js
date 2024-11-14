// Import SVGs as React components
import { ReactComponent as PythonIcon } from './logo-python.svg';
import { ReactComponent as FlaskIcon } from './flowbite--react-solid.svg';
import { ReactComponent as MlIcon } from './carbon--machine-learning.svg';
import { ReactComponent as HtmlIcon } from './html-5-logo.svg';
import { ReactComponent as CssIcon } from './css3.svg';
import { ReactComponent as TailwindIcon } from './mdi--tailwind.svg';
import { ReactComponent as bootstrapIcon } from './ri--bootstrap-fill.svg';
import { ReactComponent as JavascriptIcon } from './javascript-js-square.svg';
import { ReactComponent as ReactIcon } from './flowbite--react-solid.svg';
import { ReactComponent as JavaIcon } from './lineicons--java.svg';
import { ReactComponent as SpringbootIcon } from './spring-boot.svg';
import { ReactComponent as AiIcon } from './mage--illustrator.svg';
import { ReactComponent as AeIcon } from './hugeicons--adobe-after-effect.svg';
import { ReactComponent as MicrosoftIcon } from './mdi--microsoft-office.svg';
import { ReactComponent as DartIcon } from './game-icons--dart.svg';
import { ReactComponent as FlutterIcon } from './material-symbols--flutter.svg';


// Create an object mapping icon names to SVG components
export const icons = {
    python: PythonIcon, flask: FlaskIcon, ml: MlIcon,
    html: HtmlIcon, css: CssIcon, tailwind: TailwindIcon, bootstrap: bootstrapIcon,
    javascript: JavascriptIcon, react: ReactIcon, java: JavaIcon, springboot: SpringbootIcon,
    ai: AiIcon, ae: AeIcon, microsoft: MicrosoftIcon, dart: DartIcon, flutter: FlutterIcon
};

// The Icon component accepts the 'icon' prop and renders the corresponding SVG
export default function Icon(props) {
    const IconComponent = icons[props.icon]; // Get the React component for the icon

    return IconComponent ? (
        <IconComponent width={30} height={30} fill="currentColor" /> // Render the icon if found
    ) : (
        <div>Icon not found</div> // Fallback message if the icon doesn't exist
    );
}
