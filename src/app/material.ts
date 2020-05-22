import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    imports: [ MatTabsModule, MatCardModule, MatButtonModule, MatDividerModule ],
    exports: [ MatTabsModule, MatCardModule, MatButtonModule, MatDividerModule ],
})

export class MaterialModule {}
