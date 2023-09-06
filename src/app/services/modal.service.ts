import {
  ApplicationRef,
  ComponentRef,
  createComponent, EmbeddedViewRef,
  EnvironmentInjector,
  Injectable,
} from '@angular/core';
import { ComponentType } from "@angular/cdk/overlay";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
    private environmentInjector: EnvironmentInjector,
    private appRef: ApplicationRef,
    ) {}

  public open<C>(component: ComponentType<C>): ComponentRef<C> {
    const componentRef = createComponent(component, {
      environmentInjector: this.environmentInjector
    });
    this.appRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElement)
    return componentRef;
  }

  public close<C>(componentRef: ComponentRef<C>): void {
    componentRef.destroy();
  }
}
