import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

interface CarouselProps {
  children: React.ReactNode;
  options?: object;
}

interface CarouselState {
  flickityReady: boolean;
}

export default class Carousel extends Component<CarouselProps, CarouselState> {
  private flickity?: Flickity;
  private flickityNode?: HTMLDivElement;

  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      flickityReady: false,
    };

    this.refreshFlickity = this.refreshFlickity.bind(this);
  }

  componentDidMount(): void {
    if (this.flickityNode) {
      this.flickity = new Flickity(this.flickityNode, this.props.options || {});

      this.setState({
        flickityReady: true,
      });
    }
  }

  refreshFlickity(): void {
    if (this.flickity) {
      this.flickity.reloadCells();
      this.flickity.resize();
      // @ts-ignore - updateDraggable may not exist in all versions
      if (typeof (this.flickity as any).updateDraggable === 'function') {
        (this.flickity as any).updateDraggable();
      }
    }
  }

  componentWillUnmount(): void {
    if (this.flickity) {
      try {
        this.flickity.destroy();
        this.flickity = undefined;
      } catch (error) {
        console.warn('Error destroying Flickity:', error);
      }
    }
  }

  componentDidUpdate(prevProps: CarouselProps, prevState: CarouselState): void {
    const flickityDidBecomeActive = !prevState.flickityReady && this.state.flickityReady;
    const childrenDidChange = React.Children.count(prevProps.children) !== React.Children.count(this.props.children);

    if (flickityDidBecomeActive || childrenDidChange) {
      this.refreshFlickity();
    }
  }

  renderPortal(): React.ReactPortal | null {
    if (!this.flickityNode || !this.state.flickityReady || !this.flickity) {
      return null;
    }

    try {
      const mountNode = this.flickityNode.querySelector('.flickity-slider');

      if (mountNode && mountNode.parentNode) {
        return ReactDOM.createPortal(this.props.children, mountNode);
      }
    } catch (error) {
      console.warn('Error creating portal:', error);
    }

    return null;
  }

  render(): (JSX.Element | React.ReactPortal | null)[] {
    return [
      <div className={'test'} key="flickityBase" ref={node => (this.flickityNode = node || undefined)} />,
      this.renderPortal(),
    ].filter(Boolean);
  }
}