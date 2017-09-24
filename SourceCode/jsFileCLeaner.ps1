Get-ChildItem -Path E:\Makrand_Vichare_WebDeveloper_Kneat_CodingChallange_Test\SourceCode\1.UI\CodingChallange.MVC.Angular.UI\Scripts\App -Include *.js -File -Recurse | foreach { $_.Delete()}

Get-ChildItem -Path E:\Makrand_Vichare_WebDeveloper_Kneat_CodingChallange_Test\SourceCode\1.UI\CodingChallange.MVC.Angular.UI\Scripts\App -Include *.js.map -File -Recurse | foreach { $_.Delete()}