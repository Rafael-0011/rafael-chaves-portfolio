import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import type { PortfolioProfile } from './portfolio.types';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.css',
})
export class PortfolioPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly profile = signal<PortfolioProfile | null>(null);
  protected profileSwitchPath = '/engenheiro';
  protected profileSwitchLabel = 'Abrir perfil engenheiro';
  protected menuOpen = false;

  constructor() {
    const profileName = this.route.snapshot.data['profile'] as string;
    if (profileName === 'engenheiro') {
      this.profileSwitchPath = '/backend';
      this.profileSwitchLabel = 'Abrir perfil backend';
    }
    void this.loadProfile(profileName);
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }

  private async loadProfile(profileName: string): Promise<void> {
    const response = await fetch(`/data/${profileName}.json`);
    if (!response.ok) {
      throw new Error(`Não foi possível carregar o perfil ${profileName}.`);
    }
    this.profile.set((await response.json()) as PortfolioProfile);
    document.title = this.profile()?.meta.title ?? 'Rafael Chaves';
  }
}
