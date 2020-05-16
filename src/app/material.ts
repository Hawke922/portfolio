import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [ MatTabsModule, MatCardModule, MatButtonModule ],
    exports: [ MatTabsModule, MatCardModule, MatButtonModule ],
})

export class MaterialModule {}
